import { component$, useSignal } from "@builder.io/qwik";
import { Form,  globalAction$,  z, zod$ } from '@builder.io/qwik-city';
import { EnvelopeIcon } from "../icons/envelope";
import { MapPinIcon } from "../icons/map-pin";
import { PhoneArrowDownIcon } from "../icons/phone-arrow-down";
import { ArrowRightIcon } from '../icons/arrow-right';

export const useContactMe = globalAction$(async (user) => {
    const emailBody = `
        <p>
            <strong>Nom</strong>: ${user.name}<br>
            <strong>Email</strong>: ${user.email}<br>
            <strong>Message</strong>: ${user.message}
        </p>
    `;
    
    const res = await fetch(`https://fagnigue.netlify.app/.netlify/functions/sendmail`, {
        method: 'POST',
        body: JSON.stringify({
            message: emailBody
        }),
    });
    const mailStatus = await res.json();
    
    
    return {
        success: mailStatus.status,
    };
},
zod$({
    name: z.string().min(3, {message: 'Le nom doit contenir au moins 3 caractères'}),
    email: z.string().email({message: 'Adresse email invalide'}),
    message: z.string().min(5, {message: 'Le message doit contenir au moins 5 caratères'}),
})
);

export default component$(() => {
    const addresses = [
        {
            text: "Abidjan, Côte d'Ivoire",
            icon: <MapPinIcon class="h-6 w-6 inline-block text-secondary" />
        }, 
        {
            text: "+225 0555925604",
            icon: <PhoneArrowDownIcon class="h-6 w-6 inline-block text-secondary" />
        }, 
        {
            text: "devfullcoul@gmail.com",
            icon: <EnvelopeIcon class="h-6 w-6 inline-block text-secondary" />
        }
    ];

    const messageSentToastVisible = useSignal(true);

    const action = useContactMe()
    return (
        <div id='contact' class='w-full h-auto font-contact'>
            <div class="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-primary">
                    <div class="container mx-auto flex flex-col flex-wrap px-8">
                        <div class="">
                            <span class="text-secondary text-base lg:text-lg font-medium">Contact</span>
                            <h3 class="text-2xl lg:text-3xl font-extrabold uppercase mt-1 lg:mt-2.5">Get In Touch</h3>
                        </div>
                        <div class="flex flex-col lg:flex-row mt-5 lg-mt-10">
                            <div class="lg:w-1/2 w-full">
                                <div class="float-left mb-11 w-full pr-1 lg:pr-[6.25rem] ">
                                    <span class="font-extralight text-sm lg:text-base text-zinc-500">
                                    Veuillez remplir le formulaire de cette section pour me contacter. Ou appelez entre 9h00 et 20h00. GMT, du lundi au vendredi
                                    </span>
                                </div>
                                <div class="float-left">
                                    <ul>
                                        {addresses.map((address, index) => {
                                            return (
                                                <li key={index} class="mb-6 text-lg">
                                                    {address.icon}
                                                    <span class="ml-3">{address.text}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div class="lg:w-1/2 w-full">
                                <div class="float-right w-full pl-1 lg:pl-[6.25rem]">
                                        {
                                            action.value?.success &&
                                            messageSentToastVisible.value &&
                                            <div id="alert-3" class={`flex p-4 mb-4 text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400`} role="alert">
                                                <div class="ml-3 text-sm font-medium">
                                                    Votre message a été transmis avec succès.
                                                </div>
                                                <button type="button" onClick$={() => messageSentToastVisible.value = false} class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                                                    <span class="sr-only">Close</span>
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </div>
                                        }
                                    <Form action={action}>
                                        <input class="block w-full h-11 px-3  bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" type="text" name="name" id="name" placeholder="Nom" value={action.value?.success ? '' : action.formData?.get('name')} />
                                        {action.value?.fieldErrors?.name && <div><small class="text-red-400">{action.value?.fieldErrors?.name}</small></div>}
                                        <input class="block w-full h-11 mt-5 px-3 bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" type="email" name="email" id="email" placeholder="Email" value={action.value?.success ? '' : action.formData?.get('email')} />
                                        {action.value?.fieldErrors?.email && <div><small class="text-red-400">{action.value?.fieldErrors?.email}</small></div>}
                                        <textarea class="block w-full h-16 mt-5 px-3 py-5 bg-transparent border border-zinc-200 focus:outline-none focus:border-slate-400" name="message" id="message" placeholder="Message" value={`${action.value?.success ? '' : (action.formData?.get('message') || '')}`} />
                                        {action.value?.fieldErrors?.message && <small class="text-red-400">{action.value?.fieldErrors?.message}</small>}
                                        <button class="block w-full h-11 mt-5 bg-secondary align-middle"  type="submit">
                                            Envoyer <span><ArrowRightIcon class="h6 w-7 inline-block" /></span> 
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
})