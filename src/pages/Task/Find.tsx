import { HeaderSimple } from "../../components/Header/HeaderSimple"
import { SearchInput } from "../../components/SearchInput/SearchInput"

export function TaskFind() {
    return (
        <div>
            <div>
                <HeaderSimple />
            </div>

            <div>
                <SearchInput />
            </div>
        </div>
    )
}