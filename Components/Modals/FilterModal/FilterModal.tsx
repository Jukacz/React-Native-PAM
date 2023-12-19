import {filterModalStyles} from "./FilterModal.styles";
import {useState} from "react";
import {Button, FormControl, Input, Modal, Radio} from "native-base";
import {Text} from "react-native";

type Props = {
    onSubmit?: (filter: string) => any;
}

const FilterModal: React.FC<Props> = ({onSubmit}) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const [statusFilterValue, setStatusFilterValue] = useState<string>("all");

    const filterList = [
        {label: "All", value: ""},
        {label: "Alive", value: "alive"},
        {label: "Dead", value: "dead"},
        {label: "Unknown", value: "unknown"},
    ]

    const closeModal = () => {
        setShowModal(false);
        onSubmit && onSubmit(statusFilterValue);
    }

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
        <Button onPress={() => openModal()} >Filter</Button>
    <Modal isOpen={showModal} onClose={() => closeModal()}>
        <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Characters Filter</Modal.Header>
            <Modal.Body>
                <Text>Filtr statusu</Text>
                <Radio.Group name={"filter"} defaultValue={statusFilterValue} onChange={selectedValue => setStatusFilterValue(selectedValue)}>
                    {filterList.map((filter, index) => (
                        <Radio colorScheme="red" value={filter.value} my={1} key={index}>
                            {filter.label}
                        </Radio>
                    ))}
                </Radio.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                        setShowModal(false);
                    }}>
                        Anuluj
                    </Button>
                    <Button onPress={() => closeModal()}>
                        Zapisz
                    </Button>
                </Button.Group>
            </Modal.Footer>
        </Modal.Content>
    </Modal>
            </>
    )
}

export default FilterModal;