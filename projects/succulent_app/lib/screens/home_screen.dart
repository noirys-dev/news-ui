import 'package:flutter/material.dart';
import 'package:succulent_app/models/models.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Sample data - replace with actual data from your state management
    final sampleSucculent = Succulent(
      id: '1',
      name: 'Echeveria',
      species: 'Echeveria elegans',
      dateAdded: DateTime.now().subtract(const Duration(days: 30)),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    );

    final sampleTasks = [
      Task(
        id: '1',
        succulentId: '1',
        category: TaskCategory.watering,
        title: 'Water Echeveria',
        scheduledDate: DateTime.now(),
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      ),
      Task(
        id: '2',
        succulentId: '1',
        category: TaskCategory.monitoring,
        title: 'Check growth progress',
        scheduledDate: DateTime.now(),
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      ),
      Task(
        id: '3',
        succulentId: '1',
        category: TaskCategory.fertilizing,
        title: 'Fertilize monthly',
        scheduledDate: DateTime.now().add(const Duration(days: 5)),
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      ),
    ];

    return Scaffold(
      backgroundColor: Colors.grey[50],
      body: SafeArea(
        child: Column(
          children: [
            // Succulent visual area
            Expanded(
              flex: 2,
              child: Container(
                width: double.infinity,
                margin: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(24),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.05),
                      blurRadius: 20,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(24),
                  child: Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [Colors.green[50]!, Colors.green[100]!],
                      ),
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        // Placeholder icon/visual
                        Container(
                          width: 120,
                          height: 120,
                          decoration: BoxDecoration(
                            color: Colors.green[200],
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.local_florist,
                            size: 60,
                            color: Colors.green[700],
                          ),
                        ),
                        const SizedBox(height: 16),
                        Text(
                          sampleSucculent.name,
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.w600,
                            color: Colors.grey[800],
                          ),
                        ),
                        if (sampleSucculent.species != null) ...[
                          const SizedBox(height: 4),
                          Text(
                            sampleSucculent.species!,
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.grey[600],
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
              ),
            ),

            // Daily Tasks section
            Expanded(
              flex: 3,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 24),
                    child: Text(
                      'Daily Tasks',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w600,
                        color: Colors.grey[900],
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Expanded(
                    child: ListView.builder(
                      padding: const EdgeInsets.symmetric(horizontal: 20),
                      itemCount: sampleTasks.length,
                      itemBuilder: (context, index) {
                        final task = sampleTasks[index];
                        return Container(
                          margin: const EdgeInsets.only(bottom: 12),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.03),
                                blurRadius: 8,
                                offset: const Offset(0, 2),
                              ),
                            ],
                          ),
                          child: ListTile(
                            contentPadding: const EdgeInsets.symmetric(
                              horizontal: 20,
                              vertical: 12,
                            ),
                            leading: Container(
                              width: 48,
                              height: 48,
                              decoration: BoxDecoration(
                                color: _getCategoryColor(
                                  task.category,
                                ).withOpacity(0.1),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Icon(
                                _getCategoryIcon(task.category),
                                color: _getCategoryColor(task.category),
                                size: 24,
                              ),
                            ),
                            title: Text(
                              task.title,
                              style: const TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            subtitle: Text(
                              task.category.displayName,
                              style: TextStyle(
                                fontSize: 12,
                                color: Colors.grey[600],
                              ),
                            ),
                            trailing: task.isCompleted
                                ? Icon(
                                    Icons.check_circle,
                                    color: Colors.green[600],
                                  )
                                : Icon(
                                    Icons.radio_button_unchecked,
                                    color: Colors.grey[300],
                                  ),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),

            // Start Focus Mode button
            Padding(
              padding: const EdgeInsets.all(24),
              child: SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton(
                  onPressed: () {
                    // Handle focus mode
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.green[600],
                    foregroundColor: Colors.white,
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Text(
                    'Start Focus Mode',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Color _getCategoryColor(TaskCategory category) {
    switch (category) {
      case TaskCategory.watering:
        return Colors.blue;
      case TaskCategory.fertilizing:
        return Colors.orange;
      case TaskCategory.repotting:
        return Colors.brown;
      case TaskCategory.pruning:
        return Colors.purple;
      case TaskCategory.monitoring:
        return Colors.teal;
      case TaskCategory.other:
        return Colors.grey;
    }
  }

  IconData _getCategoryIcon(TaskCategory category) {
    switch (category) {
      case TaskCategory.watering:
        return Icons.water_drop;
      case TaskCategory.fertilizing:
        return Icons.eco;
      case TaskCategory.repotting:
        return Icons.agriculture;
      case TaskCategory.pruning:
        return Icons.content_cut;
      case TaskCategory.monitoring:
        return Icons.visibility;
      case TaskCategory.other:
        return Icons.more_horiz;
    }
  }
}
