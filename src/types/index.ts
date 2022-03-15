export type ModalType = {
  id: string,
  modalCategory: string,
  info: {
    alt: string,
    name: string,
    language_tools: string,
    desc: string,
    source: string,
    url: string,
  }
  isModal: boolean,
  // mainPhotoRef: any
}

export type WebDevType = {
  id: string,
  alt: string,
  name: string,
  language_tools: string,
  desc: string,
  category: string,
  url: string,
  source: string
}

export type IllustType = {
  id: string,
  alt: string,
  name: string,
  language_tools: string,
  desc: string,
  category: string,
  scale: string
}

export type StateType = {
  modal: ModalType,
  works: {
    webDev: WebDevType[],
    illust: IllustType[]
  }
}



export type ContainerStateType = {
  task: {
    modal: ModalType,
    works: {
      webDev: WebDevType[],
      illust: IllustType[]
    }
  }
}

export type actionShowModalType = {
  type: string,
  id: string,
  modalCategory: string,
  category: string
}
