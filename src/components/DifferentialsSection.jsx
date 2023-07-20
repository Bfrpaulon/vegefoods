import React, { useState, useEffect } from "react";
import { Badge, Icon, Tooltip } from "@material-ui/core";
import { spring } from "react-spring";
import { bootstrap } from "react-icons/bootstrap";

const Differentials = () => {
  const [badges, setBadges] = useState([
    {
      icon: <Icon icon="shopping-cart" />,
      name: "Free Shipping",
      description: "On order over $100",
      color: "primary",
    },
    {
      icon: <Icon icon="fresh" />,
      name: "Always Fresh",
      description: "Product well package",
      color: "success",
    },
    {
      icon: <Icon icon="star" />,
      name: "Superior Quality",
      description: "Quality Products",
      color: "warning",
    },
    {
      icon: <Icon icon="support" />,
      name: "Support",
      description: "24/7 Support",
      color: "danger",
    },
  ]);

  useEffect(() => {
    // Set the initial state of the badges
    setBadges(
      badges.map((badge) => ({
        ...badge,
        hoverColor: badge.color.light,
      }))
    );
  }, []);

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row no-gutters ftco-services">
          {badges.map((badge) => (
            <div key={badge.name} className="col-md-3 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <Badge
                key={badge.name}
                color={badge.color}
                hoverColor={badge.hoverColor}
              >
                <Tooltip title={badge.description} placement="right">
                  <Icon size="small" color="inherit" {...badge.icon} />
                </Tooltip>
                <div style={{ paddingLeft: 8 }}>{badge.name}</div>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
