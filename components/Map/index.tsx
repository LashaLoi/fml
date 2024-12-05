export default function Map() {
  return (
    <section className="text-gray-600 body-font relative sm:h-[600px] h-[300px]">
      <div className="absolute inset-0 bg-gray-400 h-full">
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CHAzA83h"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
