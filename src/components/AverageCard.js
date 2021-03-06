import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import moment from "moment";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons/index";

function AverageCard({ averageValue, filters }) {
  return (
    <div className="average-card-container-root">
      <div className="average-card-container">
        <span className="card-title">
          {moment(averageValue.date, "DD.M.YYYY.").format("ddd")}
        </span>
        <span className="card-subtitle">
          {moment(averageValue.date, "DD.M.YYYY.").format("DD. MMM. YYYY")}
        </span>
        <hr />
        {filters.temperature && (
          <div className="card-value-row">
            <div className="left-section section">
              <div className="left-section-content">
                <div className="image-left">
                  <TemperatureSmallIcon />
                </div>
                <div className="left-section-content-right">
                  <div className="value-container">
                    <HighValueIcon />
                    <span>{averageValue.maxTemperature}C&deg;</span>
                  </div>
                  <div className="value-container">
                    <LowValueIcon />
                    <span>{averageValue.minTemperature}C&deg;</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>/ {averageValue.averageTemperature}C&deg;</span>
              </div>
            </div>
          </div>
        )}
        {filters.humidity && (
          <div className="card-value-row">
            <div className="left-section section">
              <div className="left-section-content">
                <div className="image-left">
                  <HumiditySmallIcon />
                </div>
                <div className="left-section-content-right">
                  <div className="value-container">
                    <HighValueIcon />
                    <span>{averageValue.maxHumidity}%</span>
                  </div>
                  <div className="value-container">
                    <LowValueIcon />
                    <span>{averageValue.minHumidity}%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>/ {averageValue.averageHumidity}%</span>
              </div>
            </div>
          </div>
        )}
        {filters.pollution && (
          <div className="card-value-row">
            <div className="left-section section">
              <div className="left-section-content">
                <div className="image-left">
                  <PollutionSmallIcon />
                </div>
                <div className="left-section-content-right">
                  <div className="value-container pollution-value-container">
                    <HighValueIcon />
                    <span>{averageValue.maxPollution}ppb</span>
                  </div>
                  <div className="value-container pollution-value-container">
                    <LowValueIcon />
                    <span>{averageValue.minPollution}ppb</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section section">
              <div className="right-section-content">
                <span>
                  / {averageValue.averagePollution}
                  <span className="sub-pollution">ppb</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AverageCard;
