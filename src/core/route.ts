import Block from "./base/block";

function isEqual(lhs: unknown, rhs: unknown) {
  return lhs === rhs;
}

function BlockRender(query: string, block: Block) {
  const root = document.getElementById(query);
  if (root) {
    const blockContent = block?.getContent();
    root.innerHTML = "";
    root.appendChild(<HTMLInputElement>blockContent);
    block?.dispatchComponentDidMount();
  }
  return root;
}

interface RouteProps {
  rootQuery: string;
}

export class Route {
  private _pathname: string;
  private _blockClass: typeof Block;
  private _block: Block | null;
  private _props: RouteProps;
  private _routeState: Record<string, unknown>;

  constructor(pathname: string, view: typeof Block, props: RouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
    this._routeState = {};
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  navigate(pathname: string) {
    if (this.match(pathname) && this._block !== null) {
      BlockRender(this._props.rootQuery, this._block);
      this._block.show();
    }
  }

  leave() {
    this._block?.hide();
  }

  render(routeState: Record<string, unknown> = {}) {
    if (!this._block || routeState !== this._routeState) {
      this._routeState = routeState;
      this._block = new this._blockClass(routeState);
      BlockRender(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
