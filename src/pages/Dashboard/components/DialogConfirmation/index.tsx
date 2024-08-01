import * as S from "./styles"

type DialogConfirmProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  onSuccess: () => void
}

export function DialogConfirm({
  isOpen,
  onClose,
  title,
  onSuccess,
}: DialogConfirmProps) {
  if (!isOpen) return null

  return (
    <S.Overlay onClick={onClose}>
      <S.DialogContainer>
        <S.DialogHeader>
          <S.DialogTitle>{title}</S.DialogTitle>
          <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        </S.DialogHeader>
        <S.DialogBody>
          <p>Vale lembrar que talvez ela não possa ser revertida.</p>
        </S.DialogBody>
        <S.DialogFooter>
          <S.DialogFooterCloseButton onClick={onClose}>
            Cancelar
          </S.DialogFooterCloseButton>
          <S.DialogFooterConfirmButton onClick={onSuccess}>
            Confirmar
          </S.DialogFooterConfirmButton>
        </S.DialogFooter>
      </S.DialogContainer>
    </S.Overlay>
  )
}
