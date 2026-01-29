import { FC, useState } from 'react';
import { Modal } from 'antd';
import { X } from 'lucide-react';
import type { PictureItem } from '@/types';

interface PictureSectionProps {
  pictures: PictureItem[];
}

const PictureSection: FC<PictureSectionProps> = ({ pictures }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = (src: string) => {
    setPreviewImage(src);
    setPreviewOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {pictures.map(({ src, alt }, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/50"
            onClick={() => handlePreview(src)}
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-2 transition-transform duration-300 group-hover:translate-y-0">
              <p className="line-clamp-1 text-xs text-white">{alt}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
        width="auto"
        centered
        closeIcon={<X className="text-white" />}
        styles={{
          mask: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
          body: { background: 'transparent', padding: 0 },
          header: { display: 'none' },
        }}
        className="[&_.ant-modal-content]:!bg-transparent [&_.ant-modal-content]:!shadow-none"
      >
        <img
          src={previewImage}
          alt="preview"
          className="max-h-[75vh] rounded-lg object-contain"
        />
      </Modal>
    </>
  );
};

export default PictureSection;
