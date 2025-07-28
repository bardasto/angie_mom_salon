import React from 'react';
import { useState, useEffect } from 'react';
import { Title, Button, ActionIcon, Overlay, Center, Skeleton, Modal } from '@mantine/core';
import { IconTrash, IconPlus } from '@tabler/icons-react';
import { db, storage } from '../../services/firebase_service.js';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { showNotification } from '@mantine/notifications';
import { UploadPhotoModal } from './upload_photo_modal.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './portfolio_styles.module.css';

export const PortfolioComponent = ({ isAdminPage }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpened, setModalOpened] = useState(false);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "portfolio"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const imageList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                url: doc.data().imageUrl
            }));
            setImages(imageList);
        } catch (error) {
            console.error("Error fetching images: ", error);
            showNotification({
                title: 'Error',
                message: 'Could not fetch portfolio images.',
                color: 'red'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleDelete = async (imageId, imageUrl) => {
        if (!window.confirm('Are you sure you want to delete this photo?')) return;
        try {
            await deleteDoc(doc(db, "portfolio", imageId));
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef);
            showNotification({ title: 'Success', message: 'The photo has been successfully removed.', color: 'blue' });
            fetchImages();
        } catch (error) {
            console.error("Error deleting photo: ", error);
            showNotification({ title: 'Error', message: 'Failed to remove the photo.', color: 'red' });
        }
    };

    const sectionTitle = isAdminPage ? "Manage Portfolio" : "Our Works";

    return (
        <section className={styles.portfolio_section}>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Upload New Photo"
                centered
            >
                <UploadPhotoModal onUploadSuccess={() => {
                    fetchImages();
                    setModalOpened(false);
                }} />
            </Modal>

            <Title order={2} className={styles.title}>{sectionTitle}</Title>

            {isAdminPage && (
                <Center>
                    <Button onClick={() => setModalOpened(true)} leftSection={<IconPlus size={16} />} mb="xl">
                        Add New Photo
                    </Button>
                </Center>
            )}
            
            {loading && <Skeleton height={250} />}

            {!loading && images.length > 0 && (
                <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={images.length > 5}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        960: { slidesPerView: 4, spaceBetween: 30 },
                        1200: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                    className={styles.my_swiper}
                >
                    {images.map(image => (
                        <SwiperSlide key={image.id}>
                            <div className={styles.slide_wrapper}>
                                <img src={image.url} alt="Nail art example" className={styles.portfolio_image} />
                                {isAdminPage && (
                                    <Overlay color="#000" opacity={0} zIndex={1} className={styles.overlay} radius="md">
                                        <ActionIcon
                                            color="red"
                                            variant="filled"
                                            size="lg"
                                            radius="xl"
                                            onClick={() => handleDelete(image.id, image.url)}
                                        >
                                            <IconTrash size={24} />
                                        </ActionIcon>
                                    </Overlay>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};