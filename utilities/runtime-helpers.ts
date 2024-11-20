import React from 'react';

const resizeImage = async (file: File, maxWidth: number = 800, maxHeight: number = 800): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // アスペクト比を保持しながらリサイズ
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // 画質を調整（0.7は一般的な値）
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const useUpload = () => {
  const [loading, setLoading] = React.useState(false);

  const handleUpload = async (file: File) => {
    try {
      setLoading(true);
      
      // 画像をリサイズ
      const resizedImageUrl = await resizeImage(file);
      return { url: resizedImageUrl, error: null };
    } catch (error) {
      console.error('Upload error:', error);
      return { url: null, error };
    } finally {
      setLoading(false);
    }
  };

  return [handleUpload, { loading }];
};
