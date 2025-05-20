
import Image from 'next/image';
export default function AboutPage() {

  return (
    <div className="mt-5 text-5xl bg-white rounded p-2 style mt-5">
      <Image
        src='/Father.svg'
        alt="Saludo animado"
        width={1000}
        height={1000}
        
      />
    </div>
  )
}
