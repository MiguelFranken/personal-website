import styles from "@/styles/video.module.css";

type VideoProps = {
  src: string;
};

export default function Video({ src }: VideoProps) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        width="560"
        height="349"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
