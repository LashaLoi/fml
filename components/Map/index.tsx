export default function Map() {
  return (
    <section className="text-gray-600 body-font relative sm:h-[600px] h-[300px]">
      <div className="absolute inset-0 bg-gray-400 h-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.705619418374!2d27.475510715991206!3d53.901436080099096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdab540aaf4af%3A0x31d5bbfc86c5d8de!2z0YPQu9C40YbQsCDQntC00L7QtdCy0YHQutC-0LPQviAxMTXQkCwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1670318651713!5m2!1sru!2sby"
          // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
      </div>
    </section>
  );
}
