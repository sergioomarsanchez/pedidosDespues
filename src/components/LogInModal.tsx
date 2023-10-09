import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { logInInfoSchemaValidator, type logInInfo } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function LogInModal({
  logInIsOpen,
  setIsOpen,
}: {
  logInIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    reset()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<logInInfo>({
    resolver: zodResolver(logInInfoSchemaValidator),
  });

  const onSubmit = (data: logInInfo) => {
    console.log(data);
  };

  return (
    <>
      <button className="flex gap-1" onClick={(e) => openModal(e)}>
        <div className="rounded-xl hover:scale-[101%] bg-white flex items-center justify-center active:bg-slate-500 transition-all">
          <span className="p-2 text-xs bottom-2 font-semibold left-[16px] z-10 text-black">
            Log in
          </span>
        </div>
      </button>
      {typeof window === "object"
        ? // Check if document is finally loaded
          logInIsOpen &&
          createPortal(
            <Transition appear show={logInIsOpen} as={Fragment}>
              <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="relative flex items-center flex-col h-[450px] w-5/6 md:w-2/3 lg:w-[504px] lg:h-[500px] rounded-xl transform overflow-hidden text-textos-lighter text-white pt-6 text-left align-middle shadow-xl transition-all shadow-black gap-1 mt-4">
                        <button
                          className="absolute top-4 left-5 text-white"
                          onClick={closeModal}
                        >
                          X
                        </button>
                        <div className="w-fit mt-5">LOGO</div>
                        <h3 className="w-fit mt-2 font-bold text-lg tracking-[1.68px]">
                          Loggeate a tu cuenta
                        </h3>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="flex flex-col justify-left items-left mt-2 gap-5"
                        >
                          <div className="flex flex-col w-full">
                            <label className="mb-1 text-xs font-light mt-5">
                              Email:
                            </label>
                            <input
                              className="mb-2 md:mb-5 px-2 border-2 text-sm rounded-lg w-full h-8 md:h-9 placeholder:p-2 selection:bg-gray-400 text-black"
                              placeholder="Correo Electrónico"
                              {...register("email", {
                                required: true,
                              })}
                            />
                            {errors.email && (
                               <p className="text-red-500 text-sm font-semibold">
                                * {errors.email.message}
                              </p>
                            )}
                            <label className="mb-1 text-xs font-light mt-5">
                              Password:
                            </label>
                            <input
                              className="mb-2 md:mb-5 px-2 border-2 text-sm rounded-lg w-full h-8 md:h-9 placeholder:p-2 selection:bg-gray-400 text-black"
                              placeholder="Password"
                              {...register("password", {
                                required: true,
                              })}
                            />
                            {errors.password && (
                             <p className="text-red-500 text-sm font-semibold">
                                * {errors.password.message}
                              </p>
                            )}
                          </div>
                          <button
                            type="submit"
                            className="py-2 px-4 rounded-lg text-white bg-teal-700 text-xs lg:text-sm "
                          >
                            {/*Ir a confirmar correo electrónico*/}
                            Ingresar
                          </button>
                          {/*<button
                          type="submit"
                          className="text-white text-xs lg:text-sm font-thin mt-2"
                        >
                          Enviar otra confirmación a mi correo electrónico
                        </button>*/}
                        </form>
                        <div className="absolute bottom-4 left-5">
                          <button
                            type="button"
                            onClick={() => {
                              closeModal();
                            }}
                            className="text-sm flex gap-1 text-[var(--sponsor-color)] items-center"
                          >
                            <ArrowLeftIcon className="w-3 lg:w-5" />{" "}
                            <span>Volver</span>
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>,
            document.body
          )
        : null}
    </>
  );
}

export default LogInModal;
