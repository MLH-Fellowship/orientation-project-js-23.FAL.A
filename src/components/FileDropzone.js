import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "../icons/CloseIcon";

const baseStyle = {
  padding: "16px",
  border: "1px solid rgb(232, 232, 232)",
  borderRadius: "3px",
  display: "block",
  width: "38vw",
  margin: "10px auto 10px auto",
  backgroundColor: "white",
};

const container = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "sans-serif",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  position: "relative",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const dropZone = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease -in -out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function FileDropzone({ className }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileError, setFileError] = useState(false);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        setSelectedFile(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              file,
            })
          )
        );
        setFileError(false);
      },
      onDropRejected: (fileRejections) => {
        if (fileRejections.length > 0) {
          setFileError(true);
        }
      },
    });

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile.file);

      try {
        console.log("Upload successful");
      } catch (error) {
        console.log("Upload failed");
      }
    }
  };

  const style = useMemo(
    () => ({
      ...dropZone,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject || fileError ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, fileError]
  );

  const thumbs = selectedFile.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <span
          style={{
            zIndex: "1",
            position: "absolute",
            right: "0",
            margin: "1px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedFile([])}
        >
          <CloseIcon
            style={{
              fill: "#eaeaea",
              border: "black",
            }}
          />
        </span>
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      selectedFile.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [selectedFile]);

  return (
    <div style={baseStyle} className={className}>
      <section style={container}>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select file</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
        {selectedFile.length === 1 && (
          <button
            onClick={handleUpload}
            style={{
              padding: "5px 10px",
              marginBottom: "10px",
            }}
          >
            Confirm upload
          </button>
        )}
      </section>
    </div>
  );
}
