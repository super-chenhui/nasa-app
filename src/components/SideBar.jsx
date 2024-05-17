export default function SideBar(props) {
  const {handleToggleModal} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>lasdjfalsdj fal;sd fjasj df;alk sjdf;als jfoaiwejoiajg aosijg oipwqrjaijg al;sdkj f;alsjdf owiejoasij roiwejopiwjefil;asdj foaisjeopwqiej oiasjfoais fjas odfja sijfaois dfjoai ejfao isdjfaoisdf jaois dfao; sdjif aosd f</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>


    </div>
  )
}