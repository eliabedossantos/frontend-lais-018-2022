import { SearchBox, SearchBtn, SearchInput } from "./modules/SearchForm.module";
import { MagnifyingGlass } from 'phosphor-react'
export function SearchForm(){

    return(
        <SearchBox>
            <form>
                <SearchBtn type="submit">
                    <MagnifyingGlass size={25} color="#D16FFF"/>
                </SearchBtn> 
                <SearchInput type="text"/>
            </form>
        </SearchBox>
    );
}