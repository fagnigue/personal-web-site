import { component$, useContext, useSignal, useVisibleTask$, type Signal } from "@builder.io/qwik";
import type { Service } from "~/shared/constants/personnal-services";
import { $translate, I18nContext } from "~/i18n";

interface ServiceModalProps {
    service: Service | null;
    isOpen: Signal<boolean>;
}

export const ServiceModal = component$<ServiceModalProps>((props) => {
    const locale = useContext(I18nContext);
    const dialogRef = useSignal<HTMLDialogElement>();

    useVisibleTask$(({ track }) => {
        const open = track(() => props.isOpen.value);
        const dialog = dialogRef.value;
        if (!dialog) return;
        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    });

    if (!props.service) return null;

    const title = $translate(locale.value, props.service.titleKey);
    const description = $translate(locale.value, props.service.descriptionKey);

    return (
        <dialog
            ref={dialogRef}
            class="modal"
            onClose$={() => (props.isOpen.value = false)}
        >
            <div class="modal-box w-[90%] max-w-2xl p-0 rounded-2xl overflow-hidden sm:w-[85%] lg:max-w-3xl max-h-[85vh] flex flex-col">
                <div class="w-full h-48 lg:h-56 bg-secondary/10 overflow-hidden shrink-0">
                    <img
                        src={props.service.image}
                        alt={title}
                        width={600}
                        height={300}
                        class="w-full h-full object-cover"
                        onError$={(_, el) => {
                            el.style.display = "none";
                        }}
                    />
                </div>

                <div class="p-6 lg:p-8 overflow-y-auto min-h-0 flex-1">
                    <h3 class="text-xl lg:text-2xl font-bold text-black mb-4">
                        {title}
                    </h3>
                    <div
                        class="service-description text-zinc-600 text-sm lg:text-base leading-relaxed"
                        dangerouslySetInnerHTML={description}
                    />
                </div>

                <button
                    class="btn btn-sm btn-circle btn-ghost absolute top-3 right-3 bg-white/80 hover:bg-white shadow"
                    onClick$={() => (props.isOpen.value = false)}
                    aria-label="Close modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-5 h-5 text-black"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
});
