import DynamicCoverPhoto from './DynamicCoverPhoto'

const CoverPhoto = ({ coverPhotoUrl }: { coverPhotoUrl: string }) => (
  <div className="w-[100vw] h-[100vw] max-w-(--breakpoint-sm) max-h-[640px] fixed top-0">
    <CoverPhotoOverlay />
    <DynamicCoverPhoto photoSrc={coverPhotoUrl} />
  </div>
)

const CoverPhotoOverlay = () => (
  <div className="w-full h-full max-w-(--breakpoint-sm) max-h-[640px] bg-winter opacity-40 z-10 fixed top-0" />
)

export default CoverPhoto
