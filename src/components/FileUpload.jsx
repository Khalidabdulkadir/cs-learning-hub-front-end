import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileSelect, type = 'all', accept = '*' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];
      
      // Create preview for images
      if (type === 'image' && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsDataURL(file);
      }
      
      onFileSelect(file);
    }
  };

  return (
    <div 
      className={`file-upload ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        onChange={handleFileInput}
        accept={accept}
        className="file-input"
      />
      {preview && type === 'image' ? (
        <img src={preview} alt="Preview" className="preview-image" />
      ) : (
        <div className="upload-content">
          <i className="bi bi-cloud-upload"></i>
          <p>Drag and drop your {type === 'image' ? 'image' : 'file'} here</p>
          <p>or click to browse</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
