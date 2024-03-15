import image1 from "../../../public/blog1.jpg";
import image2 from "../../../public/blog2.jpg";
import image3 from "../../../public/blog3.png";

const delay = (ms: number) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });

const blogData = [
    {
        id: 1,
        image: image2,
        title:
            "2 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
        description:
            "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
        date: "12 December 2023",
    },
    {
        id: 2,
        image: image3,
        title:
            "3 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
        description:
            "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
        date: "13 December 2023",
    },
    {
        id: 3,
        image: image1,
        title:
            "4 Canadian Solar Partners with Sol Systems to Ramp Up U.S. Module Manufacturing",
        description:
            "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga blanditiis, quia soluta inventore nam, corrupti eveniet obcaecati harum sunt iure incidunt ducimus veritatis reprehenderit. Atque nobis perspiciatis eaque porro eos!",
        date: "14 December 2023",
    },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const page: number = parseInt(searchParams.get('page'))
    await delay(2000);
    const blogsPerPage = 6;
    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = page * blogsPerPage;
    const data = blogData.slice(startIndex, endIndex);
    const paggination = {
        totalItems: blogData.length,
        numOfPages: Math.ceil(blogData.length / blogsPerPage),
    }

    return Response.json({ data, paggination }, { status: 200 })
}


