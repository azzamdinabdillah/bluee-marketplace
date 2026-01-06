import TestimonialCard from "@src/components/TestimonialCard";
import user1 from "/images/user.png";
import user2 from "/images/user-2.png";
import user3 from "/images/user-3.png";

export default function StoreDetailsTabTestimonies() {
  return (
    <div className="flex flex-col gap-6 py-8">
      <h3 className="text-black-color text-[20px] leading-[1.6em] font-bold md:text-[32px]">
        Testimony
      </h3>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6">
        {[
          {
            id: 1,
            name: "Angga Risky",
            time: "2 days ago",
            review:
              "The item is very good, my son likes it very much and plays it every day 💯",
            avatar: user1,
            rating: 5,
            images: [
              "https://picsum.photos/seed/101/200/200",
              "https://picsum.photos/seed/102/200/200",
            ],
          },
          {
            id: 2,
            name: "Bimo Semesta",
            time: "4 days ago",
            review:
              "The seller is very fast in responding to chats and the items are also very good",
            avatar: user2,
            rating: 5,
            images: ["https://picsum.photos/seed/201/200/200"],
          },
          {
            id: 3,
            name: "Shadam Bimo",
            time: "4 days ago",
            review:
              "The items are very good, the shipping is also very fast",
            avatar: user3,
            rating: 5,
          },
          {
            id: 4,
            name: "Dian Sastro",
            time: "4 days ago",
            review:
              "The items are very good, the shipping is also very fast",
            avatar: user1,
            rating: 5,
            images: [
              "https://picsum.photos/seed/401/200/200",
              "https://picsum.photos/seed/402/200/200",
              "https://picsum.photos/seed/403/200/200",
            ],
          },
        ].map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            time={testimonial.time}
            review={testimonial.review}
            avatar={testimonial.avatar}
            rating={testimonial.rating}
            images={testimonial.images}
          />
        ))}
      </div>
    </div>
  );
}
