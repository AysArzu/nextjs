import { PageHeader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Cheap electronic devices",
};
const Page = async () => {
  await wait(3000);

  // throw new Error("Redirection error");

  return (
    <>
      <PageHeader title="Contact Us" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        aliquid, accusamus veniam rem beatae quos eum a exercitationem sequi
        sint cum distinctio veritatis eius non velit laboriosam quae. Maiores,
        excepturi. Eos distinctio eaque molestias perspiciatis dicta assumenda
        dignissimos ab delectus optio repellendus accusantium, amet placeat
        tempore eius molestiae voluptatibus rem vero praesentium unde maiores
        iste autem esse atque! Maiores, soluta? Saepe porro, accusamus quaerat
        reprehenderit ad consequuntur ullam obcaecati necessitatibus, ut animi
        veritatis voluptatem doloribus similique eaque iste fugiat soluta
        quisquam dolores tempore fugit nesciunt! Quod enim perspiciatis quidem
        optio? Beatae officia voluptatum voluptates facilis. Quia qui id libero
        cumque aliquid reiciendis at ipsam, distinctio molestias odio
        repellendus fugit nemo veritatis tempore expedita debitis repellat nulla
        fuga ab iusto! Possimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        aliquid, accusamus veniam rem beatae quos eum a exercitationem sequi
        sint cum distinctio veritatis eius non velit laboriosam quae. Maiores,
        excepturi. Eos distinctio eaque molestias perspiciatis dicta assumenda
        dignissimos ab delectus optio repellendus accusantium, amet placeat
        tempore eius molestiae voluptatibus rem vero praesentium unde maiores
        iste autem esse atque! Maiores, soluta? Saepe porro, accusamus quaerat
        reprehenderit ad consequuntur ullam obcaecati necessitatibus, ut animi
        veritatis voluptatem doloribus similique eaque iste fugiat soluta
        quisquam dolores tempore fugit nesciunt! Quod enim perspiciatis quidem
        optio? Beatae officia voluptatum voluptates facilis. Quia qui id libero
        cumque aliquid reiciendis at ipsam, distinctio molestias odio
        repellendus fugit nemo veritatis tempore expedita debitis repellat nulla
        fuga ab iusto! Possimus.
      </p>
    </>
  );
};

export default Page;
