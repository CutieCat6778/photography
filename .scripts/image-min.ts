import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

for(let i = 1;i<= 15;i++) {
    const files = await imagemin([`./public/${i}/*.{jpg,png}`], {
        destination: 'build/images/' + i,
        plugins: [
            imageminWebp({quality: 80})
        ]
    });
}