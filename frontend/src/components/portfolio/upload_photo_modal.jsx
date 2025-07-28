import React, { useState } from 'react';
import { Button, FileInput, Loader } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase_service.js';

export const UploadPhotoModal = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    
    const storage = getStorage();
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, `portfolio/${fileName}`);

    try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        await addDoc(collection(db, 'portfolio'), {
            imageUrl: downloadURL,
            createdAt: new Date(),
        });

        showNotification({ title: 'Success!', message: 'Photo uploaded!', color: 'green' });
        
        if (onUploadSuccess) {
            onUploadSuccess();
        }
    } catch (error) {
        console.error("Error uploading file: ", error);
        showNotification({ title: 'Error', message: 'Upload failed.', color: 'red' });
    } finally {
        setLoading(false);
    }
  };

  return (
    <>
      <FileInput
        label="Upload new portfolio photo"
        placeholder="Choose a photo..."
        value={file}
        onChange={setFile}
        accept="image/png,image/jpeg"
      />
      <Button 
        onClick={handleUpload} 
        mt="xl" 
        fullWidth
        disabled={!file || loading}
      >
        {loading ? <Loader size="sm" color="white" /> : 'Upload Photo'}
      </Button>
    </>
  );
};