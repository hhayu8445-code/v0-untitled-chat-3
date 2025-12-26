import Link from 'next/link';

export function ModernButtons() {
  return (
    <>
      <Link href="/scripts" className="button first">
        <button>View Scripts</button>
        <span></span>
      </Link>

      <Link href="/download" className="button sec">
        <button>Download</button>
        <span></span>
      </Link>

      <Link href="/discord" className="button third">
        <button>Connect</button>
        <span></span>
      </Link>
    </>
  );
}