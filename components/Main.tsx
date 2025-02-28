"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Editboard from "./shared/Editboard";
import { useEffect, useRef, useState } from "react";
import useToggleColor from "@/src/store/toggleColor";

const Main = () => {
  const [edit, setEdit] = useState(false);
  const refEdit = useRef<HTMLDivElement>(null);
  const isOn = useToggleColor((state) => state.isOn);

  const openEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleClickEdit = (event: MouseEvent) => {
    if (refEdit.current && !refEdit.current.contains(event.target as Node)) {
      setEdit(false);
    }
  };

  useEffect(() => {
    if (edit) {
      document.addEventListener("mousedown", handleClickEdit);
    } else {
      document.removeEventListener("mousedown", handleClickEdit);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickEdit);
    };
  }, [edit]);

  return (
    <>
      <motion.div
        className={`${isOn ? "bg-Neutral-fifth" : "bg-background"} flex h-full min-w-max gap-x-6 p-6`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-x-6">
          {/* tasks */}
          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa.
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div
                className={`${isOn ? "bg-Neutral-Primary shadow-sm" : "bg-foreground shadow-lg"} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? "text-Neutral-tertiary" : "text-Neutral-Primary"} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex min-w-64 items-center justify-center self-stretch rounded-lg transition-all duration-500 ease-in-out hover:scale-105 ${isOn ? "bg-Neutral-sixth" : "backgroundOpacity bg-Neutral-forth"} `}
          onClick={openEdit}
        >
          <Button className="h-full w-full text-xl font-semibold text-Neutral-Secondary">
            <span>+New Column</span>
          </Button>
        </div>
      </motion.div>
      {edit && <Editboard refEdit={refEdit} />}
    </>
  );
};

export default Main;
