function CreateMenuLayer() {
    let mainLayer = new Layer("menu-layer");

    let buttonStart = new Button(playButtonConfig);
    mainLayer.AddChild(buttonStart);

    let buttonExit = new Button(exitButtonConfig);
    mainLayer.AddChild(buttonExit);

    return mainLayer;
}
