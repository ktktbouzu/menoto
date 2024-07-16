import '../styles/components/sidebar.scss';

export default function Sidebar() {
  return (<div>
    <div className="sidebar__title-bar">
      <h3>My Notes</h3>
    </div>
    <ul className="sidebar__list">
      <li>Note 1</li>
      <li>Note 2</li>
      <li>Note 3</li>
      <li>Note 4</li>
      <li>Note 5</li>
      <li>Note 6</li>
    </ul>
  </div>)
}