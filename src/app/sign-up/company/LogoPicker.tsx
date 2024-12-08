'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import {
  Share2,
  Heart,
  MapPin,
  Clock,
  Star,
  BadgeCheck,
  Plus,
  Minus,
  X,
} from 'lucide-react'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { useDropzone } from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Button } from '@/components/Button'

interface ImageCropperProps {
  aspectRatio: number // The desired aspect ratio (e.g., 16/9, 4/3)
  onCropComplete: (croppedImage: Blob | null) => void // Callback to receive the cropped image
}

const CompanyLogoPicker: React.FC<ImageCropperProps> = ({
  aspectRatio,
  onCropComplete,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [croppedImageURL, setCroppedImageURL] = useState<string | null>(null) // State to hold the cropped image URL
  const imgRef = useRef<HTMLImageElement>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setImgSrc(reader.result as string)
        setIsOpen(true)
      })
      reader.readAsDataURL(file)
    } else {
      // Handle invalid file type (optional)
      console.error('Invalid file type. Please select an image.')
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'], // Accept common image types
    },
  })

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspectRatio) {
      const { width, height } = e.currentTarget
      const crop = centerCrop(
        makeAspectCrop(
          {
            unit: '%',
            width: 90,
          },
          aspectRatio,
          width,
          height,
        ),
        width,
        height,
      )
      setCrop(crop)
    }
  }

  const handleCropComplete = useCallback(
    async (crop: PixelCrop) => {
      if (imgRef.current && crop.width && crop.height) {
        const croppedImageBlob = await getCroppedImg(
          imgRef.current,
          crop,
          'croppedImage.jpeg', // Set the desired file name and extension
        )

        // Create a temporary URL for the cropped image Blob
        const newCroppedImageURL = URL.createObjectURL(croppedImageBlob)
        setCroppedImageURL(newCroppedImageURL)
        setIsOpen(false)
        onCropComplete(croppedImageBlob)
      }
    },
    [imgRef, onCropComplete],
  )

  // Clean up the temporary URL when the component unmounts or when a new image is selected
  useEffect(() => {
    return () => {
      if (croppedImageURL) {
        URL.revokeObjectURL(croppedImageURL)
      }
    }
  }, [croppedImageURL])

  const resetSelectedImage = () => {
    setCroppedImageURL(null)
    setImgSrc(null)
    setCrop(undefined)
    setCompletedCrop(undefined)
    onCropComplete(null) // Reset the cropped image
  }

  return (
    <>
      <div className="col-span-full w-full">
        {/* Display the cropped image preview */}
        {/* <h3 className="text-lg font-medium">Upload Logo:</h3> */}
        <div className="mb-3 block text-sm font-medium text-gray-700">
          Upload Logo:
        </div>
        {croppedImageURL ? (
          <div className="flex w-full items-center justify-between rounded-lg border-2 border-gray-300 bg-gray-50 p-4 hover:bg-gray-100">
            <img
              src={croppedImageURL}
              alt="Cropped Preview"
              className="h-32 w-32 max-w-full rounded-md shadow-md"
            />
            <button
              onClick={resetSelectedImage}
              className="rounded bg-white p-1 shadow hover:bg-gray-50"
            >
              <X className="h-6 w-6 text-red-500" />
            </button>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={`flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG</p>
            </div>
          </div>
        )}
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-slate-900/50">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-lg rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <p className="mt-2 text-sm/6">
                We need to crop your image to fit the required aspect ratio.
              </p>
              {imgSrc && (
                <div className="mt-4">
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspectRatio}
                  >
                    <img
                      ref={imgRef}
                      alt="Crop me"
                      src={imgSrc}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                  {completedCrop && (
                    <div className="mt-4 flex gap-4">
                      <Button
                        variant="outline"
                        className={`w-full`}
                        onClick={() => {
                          setIsOpen(false)
                          resetSelectedImage()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="solid"
                        color="blue"
                        className={`w-full`}
                        onClick={() => handleCropComplete(completedCrop)}
                      >
                        Crop Image
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

// Helper function to get the cropped image as a Blob
function getCroppedImg(
  image: HTMLImageElement,
  crop: PixelCrop,
  fileName: string,
): Promise<Blob> {
  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  const ctx = canvas.getContext('2d')
  const pixelRatio = window.devicePixelRatio

  canvas.width = crop.width * pixelRatio
  canvas.height = crop.height * pixelRatio

  if (!ctx) {
    throw new Error('No 2d context')
  }

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  ctx.imageSmoothingQuality = 'high'

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  )

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'))
          return
        }
        resolve(blob)
      },
      'image/jpeg',
      1,
    ) // Adjust image quality (0.0 - 1.0) if needed
  })
}

export default CompanyLogoPicker
