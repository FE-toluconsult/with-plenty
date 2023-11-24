import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
const inter = Inter({ subsets: ['latin']})
const montserrat = Montserrat({ subsets: ['latin']})
const playfair = Playfair_Display({ 
    weight: ['500'],
    subsets: ['latin']
})
// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export { inter, playfair, montserrat }