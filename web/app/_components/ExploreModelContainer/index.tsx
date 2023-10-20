import HeaderTitle from '../HeaderTitle'
import SearchBar, { SearchType } from '../SearchBar'
import ExploreModelList from '../ExploreModelList'
import ExploreModelFilter from '../ExploreModelFilter'

const ExploreModelContainer: React.FC = () => (
  <div className="flex flex-1 flex-col overflow-hidden px-16 pt-14">
    <HeaderTitle title="Explore Models" />
    {/* <SearchBar
      type={SearchType.Model}
      placeholder="Owner name like TheBloke, bhlim etc.."
    /> */}
    <div className="mt-9 flex flex-1 gap-x-10 overflow-hidden">
      <ExploreModelFilter />
      <ExploreModelList />
    </div>
  </div>
)

export default ExploreModelContainer