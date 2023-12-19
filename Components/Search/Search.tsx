import {Text, View} from "react-native";
import {searchStyles} from "./Search.styles";
import {Button, Input, Select} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faFilter, faSearch} from "@fortawesome/free-solid-svg-icons";
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
            <Input width={"70%"} style={searchStyles.inputSearch} value={search} onChangeText={setSearch} onBlur={() => onSubmit(search)} placeholder="Search" />
            <View style={searchStyles.buttonsContainer}>
                <FilterModal onSubmit={setFilter} />
{/*                <Select selectedValue={filter} onValueChange={(value) => setFilter(value)}>
                    {selectOptions.map((option, index) => <Select.Item style={searchStyles.inputSearch} key={index} label={option.label} value={option.value} />)}
                </Select>*/}
            </View>
        </View>
    )
}

export default Search;