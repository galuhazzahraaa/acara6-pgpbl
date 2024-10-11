import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    // Koordinat di Indonesia (misalnya di Jakarta)
    this.map = L.map('mapId').setView([-6.2088, 106.8456], 13);

    // Opsi peta basemap
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const satellite = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
    });

    // const watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    //   attribution: '&copy; <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>'
    // });

    const terrain = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; OpenStreetMap contributors'
    });

    const cartoLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    });

    // Tambahkan salah satu layer basemap ke peta (default OSM)
    osm.addTo(this.map);

    // Buat custom marker menggunakan Font Awesome
    const customIcon = L.divIcon({
      html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: red;"></i>',
      className: 'custom-div-icon',
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });

    // Tambahkan marker dengan ikon kustom Font Awesome
    const marker = L.marker([-6.167658992219107, 106.8239931094527], { icon: customIcon }).addTo(this.map);
    marker.bindPopup('Lokasi ini adalah Istana Negara').openPopup();

    // Kontrol layer untuk basemap
    const baseMaps = {
      "OpenStreetMap": osm,
      "Satellite": satellite,
      // "Watercolor": watercolor,
      "Terrain": terrain,
      "Carto Light": cartoLight
    };

    // Menambahkan kontrol layer ke peta
    L.control.layers(baseMaps).addTo(this.map);
  }
}
