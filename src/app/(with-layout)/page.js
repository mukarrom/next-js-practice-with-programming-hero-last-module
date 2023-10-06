import image1 from '@/assets/backend-devlop.jpg';

import Image from 'next/image';

const Home = () => {
	return (
		<main className="mx-32 py-16">
			<h1 className="text-center text-3xl mb-8">My Home Page</h1>
			<h2 className="text-center font-trocchi">
				Test My Fonts. This is trocchi font
			</h2>
			<h2 className="text-center font-bnFont text-3xl">
				হাই, কেমন আছো? এটা লোকাল ফন্ট
			</h2>

			<div className="flex flex-wrap">
				{/* Image from assets folder */}
				<Image src={image1} width={500} alt="" placeholder="blur" />
				{/* Image from public folder */}
				{/* Widht and height required in public image and (/) backslash is required before image name */}
				<Image
					src="/mearnStack.jpg"
					width={500}
					height={400}
					alt=""
					// placeholder="blur"
				/>

				{/* Image from network */}
				<Image
					src="https://i.ibb.co/Rcv4T8F/ki-T9-JYt-Vr58.jpg"
					alt=""
					width={500}
					height={400}
					placeholder="blur"
					blurDataURL="LGF5?xYk^6#M@-5c,1J5@[or[Q6."
				/>
			</div>
		</main>
	);
};

export default Home;
