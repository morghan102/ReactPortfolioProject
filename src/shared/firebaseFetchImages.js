import { useEffect, useState } from 'react';
import { storage, firestore } from '../firebase';

export default function FetchImages() {
    let storageRef = storage.ref()
    const [pictureURLs, setPictureURLs] = useState([])

    useEffect(() => {
        // if (pictureURLs.length === 0) {
            const fetchImages = async () => {
                let result = await storageRef.child('aboutpage').listAll(); //this needs to be ALL the images
                // BUT then it needs to be an obj/organized in a way that allows ea page to know which pics to keep.
                // not sure how to do this on firebase
                // is it even worth putting all the images onto FB? Or local ok?
                let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL())
                return Promise.all(urlPromises)
            }

            const loadImages = async () => {
                const urls = await fetchImages()
                setPictureURLs(urls)
            }
            loadImages()
        // }
    }, [])
    console.log(pictureURLs)

}