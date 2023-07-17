import { Modal } from "@/components";

import type { IContactModalProps } from "@/types";
import type { ReactElement } from "react";

export default function ContactModal(props: IContactModalProps): ReactElement | null {
  return props.isOpen ? (
    <Modal isOpen={props.isOpen} tittle="Contact Info" handleClose={props.handleClose}>
      <p className="text-center">
        The email you entered &nbsp;<strong className="underline">{props.email}</strong>&nbsp; will
        get messaged soon from a bot, this is a confirmation that i received you'r message <br />
        i'll be reaching you asap!
      </p>
    </Modal>
  ) : null;
}
