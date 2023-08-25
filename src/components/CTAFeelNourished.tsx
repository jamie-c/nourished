import { chaletNY1970 } from '@/app/fonts/fonts'
import StyledButton from './StyledButton'


const CTAFeelNourished = ({ children, href }: { children: React.ReactNode, href?: string }) => (
    <>
        <p className='text-3xl sm:text-4xl mb-10'>LET&apos;S FIGURE OUT WHAT YOUR BODY NEEDS TO</p>
        <p className={`${chaletNY1970.className} text-npag-500 text-3xl sm:text-4xl mb-10 tracking-wide`}>FEEL NOURISHED.</p>
        <StyledButton href={href || "/work-with-us"} variant='tertiary'>
            {children}
        </StyledButton>
    </>
)

export default CTAFeelNourished