import { transatBold } from "@/app/fonts/fonts";
import Script from "next/script";

export default function NewsletterForm() {
    return (
        <>
            <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
    <form 
        action="https://app.convertkit.com/forms/3036294/subscriptions" 
        className={`${transatBold.className} seva-form formkit-form w-full max-w-2xl px-4`} 
        method="post" 
        data-sv-form="3036294" 
        data-uid="1da5d3eed3" 
        data-format="inline" 
        data-version="5" 
        data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" 
        min-width="400 500 600 700 800"
    >
        <div data-style="clean">
            <ul 
                className="formkit-alert formkit-alert-error" 
                data-element="errors" 
                data-group="alert">
            </ul>
            <div 
                data-element="fields" 
                data-stacked="false" 
                className="seva-fields formkit-fields"
            >
            <div 
                className="formkit-field relative"
            >
                <input 
                    id="email_address"
                    className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-nblg-500 text-nblg-500 placeholder-transparent focus:outline-none focus:border-3" 
                    name="email_address" 
                    aria-label="EMAIL:" 
                    placeholder="EMAIL:" 
                    required
                    type="email"
                />
                <label 
                    htmlFor="email_address"
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">Email:
                </label>
            </div>
            <div 
                className="formkit-field relative mt-10"
            >
                <input 
                    id="first_name"
                    className="formkit-input peer h-10 p-4 w-full rounded-md border-3 border-nblg-500 text-nblg-500 placeholder-transparent focus:outline-none focus:border-3" 
                    aria-label="FIRST NAME:" 
                    name="fields[first_name]" 
                    required 
                    placeholder="FIRST NAME:" 
                    type="text" 
                />
                <label 
                    htmlFor="first_name" 
                    className="absolute capitalize left-1 -top-5 
                        text-npag-500 text-sm 
                        transition-all 
                        peer-placeholder-shown:left-4
                        peer-placeholder-shown:text-base 
                        peer-placeholder-shown:text-nblg-500 
                        peer-placeholder-shown:top-2.5 
                        peer-placeholder-shown:uppercase
                        peer-focus:-top-5 
                        peer-focus:left-1 
                        peer-focus:text-npag-500 
                        peer-focus:text-sm 
                        peer-focus:capitalize">First Name:
                </label>
            </div>
                <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit mt-10 mb-32 pb-2 pt-3 rounded-md bg-nblg-500 hover:bg-opacity-90 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer"  
                >
                    <div 
                        className="formkit-spinner"
                    >
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                    <span className="">SUBSCRIBE</span>
                </button>
            </div>
        </div>
    </form>
    </>
    )
    };