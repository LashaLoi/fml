export default function Map() {
  return (
    <section className="text-gray-600 body-font relative sm:h-[600px] h-[300px]">
      <div className="absolute inset-0 bg-gray-400 h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.3808411656178!2d27.414014615993196!3d53.960504480112284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc37e24945d1b%3A0x86cb2c78786c19c7!2z0KHQsNC90LDRgtC-0YDQuNC5INCh0L_Rg9GC0L3QuNC6!5e0!3m2!1sru!2sby!4v1673342098679!5m2!1sru!2sby"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.1088860928853!2d27.411718634047904!3d53.9605044165017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc37e24945d1b%3A0x86cb2c78786c19c7!2z0KHQsNC90LDRgtC-0YDQuNC5INCh0L_Rg9GC0L3QuNC6!5e1!3m2!1sru!2sby!4v1672763842224!5m2!1sru!2sby"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
      </div>
    </section>
  );
}
