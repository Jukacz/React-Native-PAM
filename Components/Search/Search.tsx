import {StyleSheet, Text, View} from "react-native";
import {Input} from "native-base";
import React, {useEffect, useState} from "react";
import FilterModal from "../Modals/FilterModal/FilterModal";

type Props = {
    onSubmit: (search: string) => any;
    onFilterChange?: (filter: string) => any;
}

const Search: React.FC<Props> = ({onSubmit, onFilterChange}) => {

    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        onFilterChange && onFilterChange(filter);
    }, [filter]);


    const selectOptions = [
        {label: "All", value: "all"},
        {label: "Alive", value: "alive"},
        {label: "Dead", value: "dead"},
        {label: "Unknown", value: "unknown"},
    ]

    return (
        <View style={searchStyles.searchView}>
            <Input width={"70%"} style={searchStyles.inputSearch} value={search} onChangeText={setSearch}
                   onBlur={() => onSubmit(search)} placeholder="Search"/>
            <View style={searchStyles.buttonsContainer}>
                <FilterModal onSubmit={setFilter}/>
                {/*                <Select selectedValue={filter} onValueChange={(value) => setFilter(value)}>
                    {selectOptions.map((option, index) => <Select.Item style={searchStyles.inputSearch} key={index} label={option.label} value={option.value} />)}
                </Select>*/}
            </View>
        </View>
    )
}

// styles

const searchStyles = StyleSheet.create({
    searchView: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    inputSearch: {
        padding: 10,
        width: "80%",
        borderRadius: 5,
    },
    buttonsContainer: {
        gap: 10,
        flexDirection: "row",
    },
    buttonSearch: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },

    selectItem: {
        color: "red",
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
})

export default Search;