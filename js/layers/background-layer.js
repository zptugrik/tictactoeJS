function CreateBackgroundLayer() {
    let mainLayer = new Layer("background-layer");

    let backgroundLayer = new Layer("background");
    backgroundLayer.AddDrawObject(ASSETS_MANAGER.GetAsset(ASSETS.MENU_BACKGROUND));
    backgroundLayer.SetPosition({x: -250, y: -80});
    mainLayer.AddChild(backgroundLayer);

    return mainLayer;
}
