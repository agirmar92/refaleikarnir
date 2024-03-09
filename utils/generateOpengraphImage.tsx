import { ImageResponse } from 'next/og'

export const generateOpengraphImage = ({
  photoUrl,
  size,
}: {
  photoUrl: string
  size: {
    width: number
    height: number
  }
}) => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          backgroundColor: '#a8b5ba',
          background: 'url("https://www.refaleikarnir.fun/fox_bg.jpg")',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src="https://refaleikarnir.sirv.com/refaleikar_logo.png"
          height={100}
          style={{ marginBottom: '4px' }}
        />
        <img
          src={photoUrl}
          width={500}
          height={500}
          style={{ borderRadius: '30%', border: '4px solid white' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
