import { Observable } from "rxjs/Observable";

export interface GALLERY_CONF {
	imageBorderRadius?: string;
    imageOffset?: string;
    imagePointer? :boolean;
    showDeleteControl?: boolean;
	showCloseControl?: boolean;
	showExtUrlControl?: boolean;
	showArrows?: boolean;
	showImageTitle?: boolean;
	showThumbnails?: boolean;
	closeOnEsc?: boolean;
	reactToKeyboard?: boolean;
	reactToMouseWheel?: boolean;
	reactToRightClick?: boolean;
	thumbnailSize?: number;
	backdropColor?: string;
	inline?: boolean;
}

export interface GALLERY_IMAGE {
	_cached?: boolean;
	url: Observable<string>;
	thumbnailUrl?: Observable<string>;
	altText?: string;
	title?: string;
	extUrl?: string;
	extUrlTarget?: string;
}