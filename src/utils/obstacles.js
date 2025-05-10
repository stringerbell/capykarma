export function getButtonObstacles(currentKarma, optionKarma) {
    if (currentKarma >= 0 || optionKarma <= 0) return {};

    const obstacles = {};
    const karmaLevel = Math.abs(currentKarma);

    if (karmaLevel > 20) {
        obstacles.move = true;
        obstacles.moveDistance = Math.min(karmaLevel * 0.5, 100);
    }

    if (karmaLevel > 50) {
        obstacles.rotate = true;
        obstacles.rotateAngle = Math.min(karmaLevel * 0.2, 45);
    }

    if (karmaLevel > 100) {
        obstacles.mirror = true;
    }

    if (karmaLevel > 150) {
        obstacles.confirm = true;
    }

    if (karmaLevel > 200) {
        obstacles.shrink = true;
    }

    if (karmaLevel > 300) {
        obstacles.invert = true;
    }

    if (karmaLevel > 400) {
        obstacles.fakeButtons = true;
    }

    return obstacles;
}