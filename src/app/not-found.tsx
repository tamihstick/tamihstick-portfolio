import Link from "next/link";

export default function NotFound() {
  return (
    <div className="archive-page-padding py-20">
      <div className="archive-content mx-auto lg:mx-0 lg:max-w-none">
        <section className="archive-panel p-8 text-center">
          <p className="archive-label text-muted">RECORD_NOT_FOUND // 404</p>
          <h1 className="archive-heading mt-4">The requested record is not in this archive.</h1>
          <p className="archive-body mt-3 text-secondary">
            The page may have moved, or the requested document does not exist yet.
          </p>
          <div className="mt-6">
            <Link href="/" className="archive-button">
              Return to Index
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
