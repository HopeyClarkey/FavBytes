import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

export default function ImageUpload({ isActive = true, setIsActive }) {
  console.log(
    !isActive ? 'Imageupload is active' : 'Imageupload is not active',
  );
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState([]);
  const [stars, setStars] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSelectChange = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  const ImageUploadTags = () => {
    const options = [
      { value: 'food', label: 'Great Food 👩🏻‍🍳' },
      { value: 'wine', label: 'Great Wine 🍷' },
      { value: 'cocktails', label: 'Great Cocktails 🍸' },
      { value: 'beer', label: 'Great Beer 🍺' },
      { value: 'breakfast', label: 'Great Breakfast 🥞' },
      { value: 'lunch', label: 'Great Lunch 🥪 ' },
      { value: 'dinner', label: 'Great Dinner 🍽️ ' },
      { value: 'bites', label: 'Great Bites 🥨 ' },
      { value: 'service', label: 'Great Service 🤵🏻‍♀️ ' },
      { value: 'atmosphere', label: 'Great Atmosphere  🏟️ ' },
    ];
    return (
      <div id="image-upload-tag-box" className="image-upload-tag-box">
        <h1>Select Tags for your photos!</h1>

        <div id="image-upload-tag-list" className="image-upload-tag-list">
          <label>
            <Select
              options={options}
              className="select-tags"
              isMulti
              value={tags}
              onChange={(choice) => setTags(choice)}
            />
          </label>
        </div>
      </div>
    );
  };
  const ImageUploadStars = () => {
    const options = [
      { value: 1, label: '🌟 one star!' },
      { value: 2, label: '🤩 two stars!' },
      { value: 3, label: '✨ three stars!' },
    ];
    return (
      <div id="image-upload-stars-box" className="image-upload-stars-box">
        <h1>Rate your Overall Experience</h1>
        <div
          id="image-upload-stars-choice"
          className="image-upload-stars-choice"
        >
          <label>
            <Select
              options={options}
              className="select-stars"
              value={stars}
              onChange={(choice) => setStars(choice)}
            />
          </label>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image,
      title,
      description,
      location,
      tags,
      stars,
    };
    console.log('Form submitted!', formData);
  };

  return (
    <form id="image-upload" className="image-upload" onSubmit={handleSubmit}>
      <button type="submit">Submit Image!</button>

      <div id="image-upload-show-here" className="image-upload-show-here">
        <h2> Upload Image</h2>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <div id="upload-img" className="upload-img">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{ width: '100%', marginTop: '10px' }}
            />
          )}
        </div>
      </div>

      <div id="image-upload-title" className="image-upload-title">
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Image Title Goes Here!"
            required
          />
        </label>
      </div>

      <div id="image-upload-description" className="image-upload-description">
        <label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Image Description Goes Here!"
            required
          />
        </label>
      </div>

      <div id="image-upload-location" className="image-upload-location">
        <label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Image Location Goes Here!"
          />
        </label>
      </div>
      <div id="image-upload-tags" className="image-upload-tags">
        <div
          id="image-upload-tag-container"
          className="image-upload-tag-container"
        >
          <ImageUploadTags tags={tags} setTags={setTags} />
          <ImageUploadStars stars={stars} setStars={setStars} />
        </div>
      </div>
    </form>
  );
}
