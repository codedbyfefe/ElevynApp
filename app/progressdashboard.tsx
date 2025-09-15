import { ScrollView, Text, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryLine, VictoryPie, VictoryTheme } from "victory";
import styles from "../styles/progressdashboardstyles";

const ProgressDashboard = () => {
  // Example data
  const wellnessScore = 72;

  const academicData = [
    { task: "Done", value: 5 },
    { task: "Remaining", value: 2 },
  ];

  const athleticData = [
    { day: 1, events: 1 },
    { day: 2, events: 1 },
    { day: 3, events: 0 },
    { day: 4, events: 1 },
    { day: 5, events: 1 },
    { day: 6, events: 0 },
    { day: 7, events: 0 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Progress Dashboard</Text>

      {/* Wellness Score Donut Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Wellness Score</Text>
        <VictoryPie
          data={[
            { x: "Wellness", y: wellnessScore },
            { x: "Remaining", y: 100 - wellnessScore },
          ]}
          colorScale={["#4CAF50", "#E0E0E0"]}
          width={250}
          height={250}
          innerRadius={90}
          labels={() => null}
        />
        <View style={styles.donutCenter}>
          <Text style={styles.donutText}>{`${wellnessScore}%`}</Text>
        </View>
      </View>

      {/* Academic Tasks Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Academic Tasks (This Week)</Text>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryBar
            data={academicData}
            x="task"
            y="value"
            style={{
              data: { fill: "#2196F3", width: 40 },
            }}
          />
        </VictoryChart>
      </View>

      {/* Athletic Events Line Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Athletic Events Attended</Text>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            data={athleticData}
            x="day"
            y="events"
            style={{
              data: { stroke: "#FF9800", strokeWidth: 3 },
            }}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

export default ProgressDashboard;
