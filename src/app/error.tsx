'use client';

export default function Error() {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
      <h2 className="text-xl font-bold">Sorry!</h2>
      <p className="my-2">
        This happens sometimes and will be fixed as soon as possible.
      </p>
    </div>
  );
}
