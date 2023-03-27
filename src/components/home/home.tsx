import { component$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "../icons/arrow-right";
import { GithubIcon } from "../icons/github";
import { IvoryCoastFlagIcon } from "../icons/ivory-coast-flag";

export default component$(() => {
    const services = ['Web development', 'Mobile development', 'API integration', 'App deployment'];
    return (
        <div id='home' class='w-full font-body'>
                <div class="w-full h-full bg-primary pt-32 pb-16 lg:py-0">
                    <div class="container h-full lg:h-screen flex items-center mx-auto">
                        <div class="w-full flex flex-col lg:flex-row px-8 lg:px-12">
                            <div class="w-full lg:w-1/2 lg:pr-12 order-2 lg:order-1">
                                <div class="w-full h-full pt-14 lg:pt-12">
                                    <div class="text-lg font-bold text-secondary mb-3">Coulibaly N'Djo-Soro Fagnigué</div>
                                    <h3 class="text-2xl lg:text-4xl font-[1000] uppercase mb-7">Fullstack Developer From Ivory Coast <IvoryCoastFlagIcon class="h-7 w-7 inline-block"/></h3>
                                    <div class="mb-7">
                                        <ul>
                                            {
                                                services.map((service, index) => (
                                                    <li key={index} class="leading-loose text-lg"> <span class="peer hover:text-secondary text-black cursor-pointer font-semibold">{service}</span> <ArrowRightIcon class="h-4 w-4 inline-block ml-2 arrow-icon peer-hover:duration-300 peer-hover:-rotate-45" /></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div class="flex flex-row w-full lg:w-auto justify-around lg:justify-start">
                                            <div class="w-auto lg:pr-9">
                                                <div class="flex flex-row">
                                                    <h3 class="font-bold text-5xl lg:text-6xl text-black">2+</h3>
                                                    <span class="ml-3 text:lg lg:text-xl text-black font-semibold">
                                                        Years of
                                                        <br />
                                                        Experience
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="w-auto lg:pl-9">
                                                <a href="https://github.com/fagnigue"><GithubIcon class="h-14 w-14" /></a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 lg:pl-12 order-1 lg:order-2">
                                <div class="w-full h-full flex place-content-center lg:block lg:relative">
                                        <div class="lg:absolute lg:h-[500px] hidden lg:block w-56 h-80 lg:w-[390px] lg:rotate-[-6deg] lg:top-[15px] lg:left-[20px] rounded-xl bg-secondary"></div>
                                        <div class="lg:relative lg:h-[500px] w-80 h-96 lg:w-[390px] lg:rotate-[8deg] lg:top-[-15px] lg:left-[105px] rounded-xl bg-profile bg-no-repeat bg-center bg-cover"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
})